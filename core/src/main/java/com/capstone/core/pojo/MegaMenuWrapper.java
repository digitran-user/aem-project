package com.capstone.core.pojo;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class MegaMenuWrapper {

    public List <PageNode> navigationItems;

    public Logo logo;

}
