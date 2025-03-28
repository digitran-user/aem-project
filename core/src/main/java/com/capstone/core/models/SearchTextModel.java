package com.capstone.core.models;

import com.capstone.core.pojo.SearchTextWrapper;
import com.google.gson.Gson;
import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Getter
public class SearchTextModel {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ValueMapValue
    private String id;

    @ValueMapValue
    private String searchRoot;

    private String jsonObj;

    @PostConstruct
    protected void init() {
        Gson gson = new Gson();
        try {
            SearchTextWrapper wrapper =SearchTextWrapper.builder()
                    .id(id)
                    .searchRoot(searchRoot)
                    .build();
            this.jsonObj= gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Search Text component", e);

        }

    }
}





