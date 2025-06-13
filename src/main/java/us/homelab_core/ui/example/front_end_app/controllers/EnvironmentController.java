package us.homelab_core.ui.example.front_end_app.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class EnvironmentController {

    @GetMapping(path = "/env-vars")
    public Map getEnvVars() {
        return new HashMap<String, String>() {{
            put("TestProperty", "TestValue");
        }};
    }
}
