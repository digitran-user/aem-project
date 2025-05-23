package com.capstone.core.models;

import com.capstone.core.pojo.CardWrapper;
import com.capstone.core.pojo.Cta;
import com.capstone.core.pojo.Image;
import com.google.gson.Gson;
import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Objects;

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

    @ChildResource
    private List<ActionModel> actions;

    @ValueMapValue
    private String tags;

    @ValueMapValue
    private String variant;

    private String jsonObj;

    @PostConstruct
    protected void init() {
        Gson gson = new Gson();
        try {
            Cta cta = null;
            if(Objects.nonNull(actions) && !actions.isEmpty()){
              cta=  Cta.builder().url(actions.get(0).getLink()).label(actions.get(0).getText()).build();
            }
            CardWrapper wrapper = CardWrapper
                    .builder()
                    .image(Image.builder().src(fileReference).alt(alt).build())
                    .cta(cta)
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
