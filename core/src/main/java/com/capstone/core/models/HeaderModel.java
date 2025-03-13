package com.capstone.core.models;


import com.capstone.core.pojo.HeaderWrapper;
import com.capstone.core.pojo.Logo;
import com.capstone.core.pojo.PageNode;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.google.gson.Gson;
import lombok.Getter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author Sai Kumar
 */

@Getter
@Model(adaptables = {Resource.class,SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeaderModel {

    private static final Logger log = LoggerFactory.getLogger(HeaderModel.class);

    @ScriptVariable
    private PageManager pageManager;

    @ValueMapValue
    private String navigationRoot;

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private String alt;

    @ValueMapValue
    private String url;

    @ValueMapValue
    private boolean showSearch;

    private List<PageNode> menuList = new ArrayList<>();

    private AtomicInteger id = new AtomicInteger(1);

    private String jsonObj;

    @PostConstruct
    protected void init() {
        Gson gson = new Gson();
        log.info("***** :: init :: Start :: ******");
        Page currentPage = pageManager.getPage(navigationRoot);
        menuList = currentPage != null ? getFirstLevelItems(currentPage, menuList, true, "", 0) : null; // Here you can read the currentPage path dialog also. I am reading it from OOTB object.
        log.info("***** :: init :: End :: *****");
        HeaderWrapper wrapper = HeaderWrapper.builder()
                .logo(Logo.builder().src(fileReference).alt(alt).url(url).build())
                .navigationItems(menuList)
                .showSearch(showSearch)
                .build();
        jsonObj = gson.toJson(wrapper);
    }

    private List<PageNode> getFirstLevelItems(Page rootPage, List<PageNode> menuList, boolean isHighLevel, String pageId, int depth) {
        Iterator<Page> firstLevelChild = rootPage.listChildren();
        while (firstLevelChild.hasNext()) {
            Page firstLevelPage = firstLevelChild.next();
            if (!firstLevelPage.isHideInNav()) {
                getMenuList(menuList, firstLevelPage,isHighLevel,pageId, depth);
            }
        }
        return menuList;
    }

    private void getMenuList(List<PageNode> menuList, Page firstLevelPage,boolean isHighLevel, String pageId, int depth) {
        PageNode navObj = new PageNode();
        String pathLink = firstLevelPage.getPath();
        navObj.setUrl(pathLink.substring(pathLink.lastIndexOf("/")));
        navObj.setLabel(firstLevelPage.getTitle());
        if(isHighLevel){
            navObj.setId(String.valueOf(id.getAndIncrement()));
        }else{
            navObj.setId(String.valueOf(pageId)+"-"+depth);
        }
        if (firstLevelPage.listChildren().hasNext()) {
            List<PageNode> secondLevelItemList = new ArrayList<>();
            getFirstLevelItems(firstLevelPage, secondLevelItemList, false, navObj.getId(), ++depth);
            navObj.setChildren(secondLevelItemList);
        }
        menuList.add(navObj);
    }

}
