package me.cire3.hackathon.backend

import org.springframework.data.redis.serializer.RedisSerializer

object IntRedisSerializer : RedisSerializer<Int> {
    override fun serialize(value: Int?): ByteArray? {
        return value?.toString()?.toByteArray(Charsets.UTF_8)
    }

    override fun deserialize(bytes: ByteArray?): Int? {
        return bytes?.toString(Charsets.UTF_8)?.toIntOrNull()
    }
}