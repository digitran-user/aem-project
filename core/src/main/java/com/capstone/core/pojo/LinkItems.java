package com.capstone.core.pojo;


import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LinkItems {

     @ValueMapValue
     @Optional
     @Getter
     @Setter
     private String label;

     @ValueMapValue
     @Optional
     @Getter
     @Setter
     @Named("linkUrl")
     private String url;

    @ValueMapValue
    @Optional
    @Getter
    @Setter
    private String description;
   
    @ValueMapValue
    @Optional
    @Getter
    @Setter
    @Named("linkId")
    private String id;
    
}
