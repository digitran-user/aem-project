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

import com.capstone.core.pojo.AccordionItem;
import com.capstone.core.pojo.AccordionWrapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import lombok.Getter;
import lombok.Setter;


@Model(adaptables = Resource.class)
public class AccordionModel {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    @ChildResource
    @Optional
    @Getter
    @Setter
    private List<AccordionItem> accItems;

    @PostConstruct
    protected void init() {
        getJsonObj();
    }

   
     public String getJsonObj() {
        Gson gson = new Gson();
        try {
            AccordionWrapper  wrapper = new AccordionWrapper();
            wrapper.setItems(accItems);
            return gson.toJson(wrapper);
        } catch (Exception e) {
            LOG.error("Exception while rendering Accordion component", e);
            return "{}";
        }
    }

}
