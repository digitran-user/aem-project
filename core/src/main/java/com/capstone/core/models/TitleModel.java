package com.capstone.core.models;

import lombok.Getter;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.capstone.core.pojo.BannerWrapper;
import com.capstone.core.pojo.Cta;
import com.capstone.core.pojo.TitleWrapper;
import com.google.gson.Gson;

@Getter
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TitleModel {

   private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ValueMapValue(name="jcr:title")
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String alignment ;
     
    @PostConstruct
    protected void init() {
        getJsonObj();
    }

   
     public String getJsonObj() {
        Gson gson = new Gson();
        try {
            TitleWrapper wrapper = new TitleWrapper();
            wrapper.setTitle(title);
            wrapper.setAlignment(alignment);
            wrapper.setSubtitle(description);
            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Title component", e);
            return "{}";
        }
    }
}
