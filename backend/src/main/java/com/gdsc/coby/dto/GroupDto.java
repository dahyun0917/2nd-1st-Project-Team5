package com.gdsc.coby.dto;

import com.gdsc.coby.domain.Group;

import java.time.LocalDateTime;

public record GroupDto(
        Long id,
        String name,
        String description,
        LocalDateTime createdAt,
        String createdBy
) {
    public GroupDto of (Long id, String name, String description, LocalDateTime createdAt, String createdBy){
        return new GroupDto(id, name, description, createdAt, createdBy);
    }

    public static GroupDto from (Group entity){
        return new GroupDto(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getCreatedAt(),
                entity.getCreatedBy()
        );
    }

    public Group toEntity(){
        return Group.of(
                name,
                description
        );
    }
}