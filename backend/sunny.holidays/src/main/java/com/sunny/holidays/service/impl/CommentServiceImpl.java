package com.sunny.holidays.service.impl;

import com.sunny.holidays.entity.Comment;
import com.sunny.holidays.repository.CommentRepository;
import com.sunny.holidays.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<Comment> getAll() {
        return  this.commentRepository.findAll();
    }

    @Override
    public Optional<Comment> getById(Long id) {
        return this.commentRepository.findById(id);
    }

    @Override
    public Comment save(Comment comment) {
        return this.commentRepository.save(comment);
    }

    @Override
    public Comment update(Comment comment, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        this.commentRepository.deleteById(id);
    }
}
