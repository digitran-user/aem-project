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
public class CarouselItem {

    @ValueMapValue
    @Optional
    @Getter
    @Setter
    private String id;

    @ValueMapValue
    @Optional
    @Getter
    @Setter
    private String image;


    @ValueMapValue
    @Optional
    @Getter
    @Setter
    private String title;

    @ValueMapValue
    @Optional
    @Getter
    @Setter
    private String description;
    
    @ValueMapValue
    @Optional
    @Getter
    @Setter
    private String link;

    @ValueMapValue
    @Optional
    @Getter
    @Setter
    @Named("alt")
    private String altText;

   
}
