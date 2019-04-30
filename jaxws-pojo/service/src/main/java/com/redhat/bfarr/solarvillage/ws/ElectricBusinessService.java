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
package com.redhat.bfarr.solarvillage.ws;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import com.redhat.bfarr.solarvillage.datamodel.*;

import java.util.Date;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public class ElectricBusinessService {
    public static String statusToSet = Status.APPROVED.value();


    @WebMethod
    public String echo(String input) {
        return "ElectricBusinessService pojo: " + input;
    }

    @WebMethod
    public String statusToSet(String input) {
        statusToSet = input;
        return statusToSet;
    }

    @WebMethod
    public ElectricPermit submitPermitRequest(ElectricPermit electricPermit) {
        System.out.println("Received submitPermitRequest " + electricPermit.toString());
        electricPermit.setDateSubmitted(new Date());
        return electricPermit;
    }

    @WebMethod
    public ElectricPermit getPermitRequestStatus(ElectricPermit electricPermit) {
        System.out.println("Received getPermitRequestStatus " + electricPermit.toString());
        System.out.println("Setting status " + statusToSet);
        electricPermit.setStatus(statusToSet);
        return electricPermit;
    }

    @WebMethod
    public ElectricPermit rescindPermit(ElectricPermit electricPermit) {
        System.out.println("Received rescindPermit " + electricPermit.toString());
        electricPermit.setStatus(Status.CANCELLED.value());
        return electricPermit;
    }
}
