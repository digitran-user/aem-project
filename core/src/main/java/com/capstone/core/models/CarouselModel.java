package com.capstone.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.capstone.core.pojo.CarouselItem;
import com.capstone.core.pojo.CarouselWrapper;
import com.google.gson.Gson;

import lombok.Getter;
import lombok.Setter;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CarouselModel{

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @Optional
    @Getter
    @Setter
    @ChildResource
    private List<CarouselItem> carouselItems;

    @PostConstruct
    protected void init() {
        getJsonObj();
    }

   
     public String getJsonObj() {
        Gson gson = new Gson();
        try {
            CarouselWrapper wrapper = new CarouselWrapper();
            wrapper.setItems(carouselItems);
            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Banner component", e);
            return "{}";
        }
    }
   

}
