package me.cire3.hackathon.backend.api

import me.cire3.hackathon.backend.service.PriceService

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController
import kotlin.math.abs

@Validated
@RestController("/v1/api/")
class MainApiController {
    @Autowired
    lateinit var redis: RedisTemplate<Long, StockList>
    @Autowired
    lateinit var priceService: PriceService

    @GetMapping("/get_stocks/{id}")
    fun handleStockListRequest(
        @PathVariable("id") id: Long
    ): StockList {
        var list = redis.opsForValue().get(id)

        if (list == null) {
            list = StockList(HashMap(), HashMap(), 0.0)
            redis.opsForValue().set(id, list)
        }

        return list
    }

    @PostMapping("/sell_stock/{id}/{stock_name}/{amt}")
    fun handleSellRequest(
        @PathVariable("id") id: Long,
        @PathVariable("stock_name") stockName: String,
        @PathVariable("amt") amt: Int
    ): Boolean {
        return modifyStockCount(id, stockName, -1 * amt)
    }

    @PostMapping("/buy_stock/{id}/{stock_name}/{amt}")
    fun handleBuyRequest(
        @PathVariable("id") id: Long,
        @PathVariable("stock_name") stockName: String,
        @PathVariable("amt") amt: Int
    ): Boolean {
        return modifyStockCount(id, stockName, 1 * amt)
    }

    private fun modifyStockCount(id: Long, stockName: String, modif: Int): Boolean {
        val stockList = redis.opsForValue().get(id) ?: return false
        val stockMap = stockList.stockMap
        val cur = stockMap[stockName] ?: return false

        if (cur <= 0)
            return false

        stockMap[stockName] = cur + modif
        stockList.balance -= modif * priceService.getPriceOfStock(stockName)
        stockList.actionMap[System.currentTimeMillis()] = StockList.Action(modif < 0, abs(modif))

        return true
    }
}