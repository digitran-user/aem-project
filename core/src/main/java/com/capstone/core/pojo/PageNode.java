package com.capstone.core.pojo;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public  class PageNode {

    private String id;
    private String label;
    private String url;
    private List<PageNode> children;


}