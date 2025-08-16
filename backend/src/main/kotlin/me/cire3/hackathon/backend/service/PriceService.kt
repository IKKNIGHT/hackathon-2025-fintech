package me.cire3.hackathon.backend.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.redis.core.StringRedisTemplate
import org.springframework.stereotype.Service
import java.time.Duration

@Service
class PriceService {
    @Autowired
    lateinit var redis: StringRedisTemplate
    @Autowired
    lateinit var fetchService: FetchService

    fun getPriceOfStock(stock: String): Double {
        return redis.opsForValue().get(stock)?.toDoubleOrNull() ?: fetchAndCacheFromApi(stock)
    }

    private fun fetchAndCacheFromApi(stock: String): Double {
        val price: Double = fetchService.fetchFromApi(stock)

        redis.opsForValue().set(stock, price.toString(), Duration.ofMinutes(5))
        return price
    }
}