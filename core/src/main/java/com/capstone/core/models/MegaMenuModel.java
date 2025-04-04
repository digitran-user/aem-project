package com.capstone.core.models;

import com.capstone.core.pojo.Logo;
import com.capstone.core.pojo.MegaMenuWrapper;
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


@Model(adaptables ={Resource.class, SlingHttpServletRequest.class},defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MegaMenuModel {

    private static final Logger log = LoggerFactory.getLogger(MegaMenuModel.class);

    @ScriptVariable
    private PageManager pageManager;

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private String navigationRoot;

    @ValueMapValue
    private String alt;

    @ValueMapValue
    private String url;

    private List<PageNode> menuList = new ArrayList<>();

    private AtomicInteger id = new AtomicInteger(1);

    @Getter
    private String jsonObj;

    @PostConstruct
    protected void init() {
        Gson gson = new Gson();
        log.info("***** :: init :: Start :: ******");
        Page currentPage = pageManager.getPage(navigationRoot);
        menuList = currentPage != null ? getItems(currentPage, menuList, true, "", 0) : null;
        log.info("***** :: init :: End :: *****");
        jsonObj = gson.toJson(MegaMenuWrapper.builder()
                .logo(Logo.builder().src(fileReference).alt(alt).url(url).build())
                .navigationItems(menuList)
                .build());
    }

    private List<PageNode> getItems(Page rootPage, List<PageNode> menuList, boolean isHighLevel, String pageId, int depth) {
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
            getItems(firstLevelPage, secondLevelItemList, false, navObj.getId(), ++depth);
            navObj.setChildren(secondLevelItemList);
        }
        menuList.add(navObj);
    }

}
