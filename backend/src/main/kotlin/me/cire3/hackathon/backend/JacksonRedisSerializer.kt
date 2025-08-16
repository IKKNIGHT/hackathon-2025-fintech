package me.cire3.hackathon.backend

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import org.springframework.data.redis.serializer.RedisSerializer
import org.springframework.data.redis.serializer.SerializationException

class JacksonRedisSerializer<T> (
    private val type: Class<T>,
    private val objectMapper: ObjectMapper = jacksonObjectMapper(),
) : RedisSerializer<T> {
    override fun serialize(t: T?): ByteArray? {
        return try {
            if (t == null) null else objectMapper.writeValueAsBytes(t)
        } catch (e: Exception) {
            throw SerializationException("Error serializing object of type $type", e)
        }
    }

    override fun deserialize(bytes: ByteArray?): T? {
        return try {
            if (bytes == null || bytes.isEmpty())
                null
            else
                objectMapper.readValue(bytes, type)
        } catch (e: Exception) {
            throw SerializationException("Error deserializating bytes to type $type", e)
        }
    }
}