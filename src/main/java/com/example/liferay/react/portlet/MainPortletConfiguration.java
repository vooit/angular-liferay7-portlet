package com.example.liferay.react.portlet;

import aQute.bnd.annotation.metatype.Meta;


@Meta.OCD(id = "MainPortletConfiguration")
public interface MainPortletConfiguration {
    @Meta.AD(
        deflt = "blue",
        required = false
    )
    public String favoriteColor();
}
