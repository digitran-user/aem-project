package com.capstone.core.pojo;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Builder
@Getter
public class ImageTextWrapper {

    private Image image;

    private String title;

    private String content;

    private Cta cta;

    private String imagePosition;

    private String contentPosition;

    private String backgroundColor;



}
