package us.homelab_core.ui.example.front_end_app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardingController {

    @RequestMapping(value = "/home")
    public String homepage(Model model) {
        return "home";
    }


    @RequestMapping(value = {
            "/",
            "/{path:[^\\.]*}" // Catches any path without a file extension
    })
    public String forward() {
        return "forward:/index.html";
    }

}
