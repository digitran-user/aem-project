package com.capstone.core.models;


import com.capstone.core.pojo.Cta;
import com.capstone.core.pojo.Image;
import com.capstone.core.pojo.ImageTextWrapper;
import com.google.gson.Gson;
import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;


@Getter
@Model(adaptables= Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageTextModel {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private String alt;

    @ValueMapValue(name = "jcr:title")
    private String title;

    @ValueMapValue
    private String content;

    @ValueMapValue
    private String imageCtaLabel;

    @ValueMapValue
    private String imageCtaLink;

    @ValueMapValue
    private String imagePosition;

    @ValueMapValue
    private String contentPosition;

    @ValueMapValue
    private String backGroundColor;

    private String jsonObj;

    @PostConstruct
    protected void init() {
        Gson gson = new Gson();
        try {
            ImageTextWrapper wrapper = ImageTextWrapper
                    .builder()
                    .image(Image.builder().src(fileReference).alt(alt).build())
                    .title(title)
                    .content(content)
                    .cta(Cta.builder().label(imageCtaLabel).url(imageCtaLink).build())
                    .imagePosition(imagePosition)
                    .contentPosition(contentPosition)
                    .backgroundColor(backGroundColor)
                    .build();
            jsonObj = gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Image Text component", e);
        }
    }
}



