package com.capstone.core.pojo;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class HeaderWrapper {

    public Logo logo;

    public List<PageNode> navigationItems;

    public boolean showSearch;


}
