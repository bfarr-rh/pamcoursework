/*
 * JBoss, Home of Professional Open Source
 * Copyright 2015, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.redhat.bfarr.solarvillage.ws.client;

import com.redhat.bfarr.solarvillage.ws.*;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import java.net.URL;

/**
 * @author rsearls@redhat.com
 */
public class Client {

    public static void main(String[] args) {
        electricBusinessService();
        structualBusinessService();
    }

    public static void electricBusinessService() {
        String endPointAddress = "http://localhost:8080/jaxws-pojo-endpoint/ElectricBusinessService";
        QName serviceName = new QName("http://ws.solarvillage.bfarr.redhat.com/", "ElectricBusinessServiceService");

        try {
            URL wsdlURL = new URL(endPointAddress + "?wsdl");
            Service service = new ElectricBusinessServiceService(wsdlURL, serviceName);
            ElectricBusinessService proxy = service.getPort(ElectricBusinessService.class);
            System.out.println(proxy.echo("pojo1Client calling"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void structualBusinessService() {
        String endPointAddress = "http://localhost:8080/jaxws-pojo-endpoint/StructuralBusinessService";
        QName serviceName = new QName("http://ws.solarvillage.bfarr.redhat.com/", "StructuralBusinessServiceService");

        try {
            URL wsdlURL = new URL(endPointAddress + "?wsdl");
            Service service = new StructuralBusinessServiceService(wsdlURL, serviceName);
            StructuralBusinessService proxy = service.getPort(StructuralBusinessService.class);
            System.out.println(proxy.echo("pojo2Client calling"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
