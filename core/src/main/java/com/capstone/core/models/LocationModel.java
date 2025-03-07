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
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.capstone.core.pojo.Hours;
import com.capstone.core.pojo.LocationWrapper;
import com.google.gson.Gson;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import lombok.Getter;
import lombok.Setter;



@Setter
@Getter
@Model(adaptables = Resource.class)
public class LocationModel {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ValueMapValue
    @Optional
    private String title;

    @ValueMapValue
    @Optional
    private String address;

    @ValueMapValue
    @Optional
    private String phone;

    @ValueMapValue
    @Optional
    private String email; 

    @ValueMapValue
    @Optional
    private String mapEmbedUrl; 

    @ValueMapValue
    @Optional
    private Boolean showMap;

    @ChildResource
    @Optional
    private List<Hours> businesshours;


    @PostConstruct
    protected void init() {
        getJsonObj();
    }

   
     public String getJsonObj() {
        Gson gson = new Gson();
        try {

            LocationWrapper wrapper = new LocationWrapper();
            wrapper.setAddress(address);
            wrapper.setEmail(email);
            wrapper.setMapEmbed(mapEmbedUrl);
            wrapper.setPhone(phone);
            wrapper.setTitle(title);
            wrapper.setShowMap(showMap);
            wrapper.setHours(businesshours);
           
        
            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Banner component", e.getMessage());
            return "{}";
        }
    }

}
