package cn.edu.aynu.editorproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author 姬鹏辉
 * @date 2019/12/22
 */
@Controller
public class IndexController {

    @GetMapping("/")
    public String index(){
        return "main";
    }

    @GetMapping("/editor")
    public String editor(){
        return "editor";
    }
}
