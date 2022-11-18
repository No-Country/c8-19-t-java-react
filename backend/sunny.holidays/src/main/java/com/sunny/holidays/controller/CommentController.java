package com.sunny.holidays.controller;

import com.sunny.holidays.entity.Comment;
import com.sunny.holidays.service.impl.CommentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comment") //agrega una ruta generica para todo el controlador
public class CommentController {

    @Autowired
    private CommentServiceImpl commentService;

    @GetMapping("/")
    public ResponseEntity<List<Comment>> getAll(){
        List<Comment> commentList = this.commentService.getAll();
        return ResponseEntity.ok().body(commentList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> getById(@PathVariable Long id){
        Optional<Comment> comment = this.commentService.getById(id);
        return ResponseEntity.ok().body(comment.get());
    }

    @PostMapping("/")
    public ResponseEntity<Comment> save(@RequestBody Comment client) {
        Comment commentSaved = this.commentService.save(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(commentSaved);
    }

    @DeleteMapping("/")
    public ResponseEntity<Comment> delete(Long id) {
        this.commentService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
