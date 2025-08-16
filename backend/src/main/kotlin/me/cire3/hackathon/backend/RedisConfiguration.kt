package me.cire3.hackathon.backend

import me.cire3.hackathon.backend.api.StockList
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.connection.RedisConnectionFactory
import org.springframework.data.redis.core.RedisTemplate

@Configuration
class RedisConfiguration {
    @Bean
    fun redisTemplate(connectionFactory: RedisConnectionFactory): RedisTemplate<Long, StockList> {
        val redis: RedisTemplate<Long, StockList> = RedisTemplate()
        redis.apply {
            setConnectionFactory(connectionFactory)
            keySerializer = IntRedisSerializer
            valueSerializer = JacksonRedisSerializer(StockList::class.java)
        }

        return redis
    }
}