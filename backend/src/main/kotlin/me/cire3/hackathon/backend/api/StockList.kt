package me.cire3.hackathon.backend.api

import com.fasterxml.jackson.annotation.JsonProperty

data class StockList(
    @get:JsonProperty("StockMap")
    val stockMap: MutableMap<String, Int>,
    @get:JsonProperty("ActionMap")
    val actionMap: MutableMap<Long, Action>,
    @get:JsonProperty("Balance")
    var balance: Double
) {
    class Action(
        val isSell: Boolean,
        val amt: Int
    )
}
