package me.cire3.hackathon.backend.service

import org.openapitools.client.apis.DefaultApi
import org.openapitools.client.infrastructure.ApiClient
import org.springframework.stereotype.Service

@Service
class FetchService {
    private var initialized: Boolean = false

    fun fetchFromApi(stock: String): Double {
        if (!initialized)
            init()

        try {
            val api = DefaultApi()
            val result = api.listTickers(
                ticker = stock,
                market = "stocks",
                active = "true",
                order = "asc",
                limit = "100",
                sort = "ticker"
            )
        } catch (e: Exception) {
            return Math.random() * 1000
        }
    }

    private fun init(): Unit {
        initialized = true

        ApiClient.apiKey["apiKey"] = "qjzPPW1KubkIzLYVTHsxppuihVdHQ72E"
    }
}