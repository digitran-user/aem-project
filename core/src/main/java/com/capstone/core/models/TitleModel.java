package com.capstone.core.models;

import lombok.Getter;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.capstone.core.pojo.Style;
import com.capstone.core.pojo.TitleWrapper;
import com.google.gson.Gson;

@Getter
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TitleModel {

   private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ValueMapValue(name="jcr:title")
    @Optional
    private String title;

    @ValueMapValue
    @Optional
    private String description;

    @ValueMapValue
    @Optional
    private String alignment ;

    @ValueMapValue
    @Optional
    private String titleFont;
    
    @ValueMapValue
    @Optional
    private String subtitleFont;

    @ValueMapValue
    @Optional
    private String yspacing;
    
     
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

            Style style = new Style();
            style.setSubtitleFont(subtitleFont+"px");
            style.setTitleFont(titleFont+"px");
            style.setYspacing(yspacing+"px");
            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Title component", e);
            return "{}";
        }
    }
}
