
package com.capstone.core.pojo;

import java.util.List;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LocationWrapper {

    private String title;

    private String address;

    private String phone;

    private String email; 

    private String mapEmbed; 

    private Boolean showMap;

    private List<Hours> hours;
    
}
