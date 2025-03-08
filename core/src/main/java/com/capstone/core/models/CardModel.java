package com.capstone.core.models;

import com.capstone.core.pojo.CardWrapper;
import com.capstone.core.pojo.Cta;
import com.capstone.core.pojo.Image;
import com.google.gson.Gson;
import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.annotation.PostConstruct;

/**
 * @author Sai Kumar
 */
@Getter
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CardModel {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private String alt;

    @ValueMapValue(name = "jcr:title")
    private String title;

    @ValueMapValue(name = "jcr:description")
    private String description;

    @ValueMapValue
    private String text;

    @ValueMapValue
    private String linkTarget;

    @ValueMapValue
    private String linkURL;

    @ValueMapValue
    private String tags;

    @ValueMapValue
    private String variant;

    private String jsonObj;

    @PostConstruct
    protected void init() {
        Gson gson = new Gson();
        try {
            CardWrapper wrapper = CardWrapper
                    .builder()
                    .image( Image.builder().src(fileReference).alt(alt).build())
                    .cta( Cta.builder().url(linkURL).label(text).build())
                    .title(title)
                    .description(description)
                    .variant(variant)
                    .tags(tags)
                    .build();
            jsonObj = gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Card component", e);
        }
    }





}
