package com.capstone.core.models;


import com.capstone.core.pojo.GalleryImageList;
import com.capstone.core.pojo.GalleryWrapper;
import com.google.gson.Gson;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@Model(
        adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class GalleryModel  {

    private final Logger LOG = LoggerFactory.getLogger(getClass());


    @ChildResource
    private List<GalleryImageList> imageList;


    @PostConstruct
    protected void init() {
        getJsonObj();
    }


    public String getJsonObj() {
        Gson gson = new Gson();
        try {
            GalleryWrapper wrapper =
                    GalleryWrapper.builder()
                            .imageList(imageList.stream()
                                    .map(GalleryImageList::getImage)
                                    .collect(Collectors.toList()))
                            .build();

            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Gallery component", e);
            return "{}";
        }
    }

}

