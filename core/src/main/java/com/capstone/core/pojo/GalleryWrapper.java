package com.capstone.core.pojo;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class GalleryWrapper {

    private List<String> imageList;
}
