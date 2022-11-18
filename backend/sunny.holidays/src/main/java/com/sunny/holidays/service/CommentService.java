package com.sunny.holidays.service;

import com.sunny.holidays.entity.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {

    List<Comment> getAll();
    Optional<Comment> getById(Long id);
    Comment save(Comment comment);
    Comment update(Comment comment, Long id);
    void delete(Long id);

}
