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

@Getter
@Setter
@Data
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class IconLists {
    
     @ValueMapValue
     @Optional
     @Named("iconlabel")
    private String name;

    @ValueMapValue
    @Optional
    @Named("iconlink")
    private String href;

    @ValueMapValue
    @Optional
    @Named("iconType")
   private String icon;
}
