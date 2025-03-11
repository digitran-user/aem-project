/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.capstone.core.models;



import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.models.annotations.Optional;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.capstone.core.pojo.FooterNav;
import com.capstone.core.pojo.FooterWrapper;
import com.capstone.core.pojo.IconLists;
import com.capstone.core.pojo.Image;
import com.capstone.core.pojo.Links;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Model(adaptables = Resource.class)
public class FooterModel {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ChildResource
    @Optional
    private List<Links> links;

    @ChildResource
    @Optional
    private List<IconLists> iconList;

    @ValueMapValue
    @Optional
    private String copyright; 

    @ValueMapValue
    @Optional
    private String logoPath; 

    @ValueMapValue
    @Optional
    private String logoAlt;

   

    @PostConstruct
    protected void init() {
        getJsonObj();
    }

   
     public String getJsonObj() {
        Gson gson = new Gson();
        try {
            FooterWrapper wrapper = new FooterWrapper();
            wrapper.setCopyright(copyright);
            Image logo = Image.builder().alt(logoAlt).src(logoPath).build();
            wrapper.setLogo(logo);
            FooterNav footernav = new FooterNav();
            footernav.setMain(links);
            footernav.setSocial(iconList);
            wrapper.setNavigation(footernav);
            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Footer component", e);
            return "{}";
        }
    }

}
