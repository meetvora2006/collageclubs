/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.myclubapp;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import static java.time.Clock.system;
import java.util.Iterator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;


@CrossOrigin(origins="*")
@RestController
public class Upload{

    @RequestMapping(value="/imageUpload", method = RequestMethod.POST)
    public void UploadFile(MultipartHttpServletRequest request) throws IOException {

        
       System.out.println(request);
//        Iterator<String> itr=request.getFileNames();
//        MultipartFile file=request.getFile(itr.next());
//        String fileName=file.getOriginalFilename();
//        File dir = new File("C:\\java\\projects\\collegeclubs\\src\\main\\resources\\static\\images");
//        if (dir.isDirectory())
//        {
//            File serverFile = new File(dir,fileName);
//            BufferedOutputStream stream = new BufferedOutputStream(
//                    new FileOutputStream(serverFile));
//            stream.write(file.getBytes());
//            stream.close();
//        }else {
//            System.out.println("not");
//        }

    }

    private void print(MultipartHttpServletRequest request) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}