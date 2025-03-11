package com.capstone.core.pojo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Builder
@Getter
public class Image {

    private String src;

    private String alt;
}
