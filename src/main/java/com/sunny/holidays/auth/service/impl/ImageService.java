package com.sunny.holidays.auth.service.impl;

import com.sunny.holidays.auth.entity.Image;
import com.sunny.holidays.auth.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public Image save(MultipartFile file) throws Exception {
        if (file != null) {
            try {
                Image image = new Image();
                image.setMime(file.getContentType());
                image.setName(file.getName());
                image.setContent(file.getBytes());
                return imageRepository.save(image);
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        return null;
    }

    public Image upDate(Long idImage, MultipartFile file) throws Exception{
        if (file != null) {
            try {
                Image image = new Image();
                if(idImage != null){
                    Optional<Image> response=imageRepository.findById(idImage);
                    if(response.isPresent()){
                        image= response.get();
                    }
                }
                image.setMime(file.getContentType());
                image.setName(file.getName());
                image.setContent(file.getBytes());
                return imageRepository.save(image);
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        return null;
    }

}
