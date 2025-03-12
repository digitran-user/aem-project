package com.capstone.core.pojo;

import lombok.Builder;
import lombok.Setter;

@Setter
@Builder
public class CardWrapper {

    private Image image;

    private String title;

    private String description;

    private Cta cta;

    private String tags;

    private String variant;

}
