package com.capstone.core.pojo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class Logo {

    private String src;

    private String alt;

    private String url;

}
