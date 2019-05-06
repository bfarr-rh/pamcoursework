# 1. Solar Village
Solar Village home work assignment
# 2. Environment
This POC uses the Process Automation Manager 7.3.0.GA running on JBOSS EAP 7.2.

The environment for this POC has been setup with instructions from 
https://github.com/jbossdemocentral/rhpam7-install-demo
using option 1 for running locally.


Alternatively you could install PAM using the base install providing you adjust the users in the UI for running the demo.
You can download a copy from:
https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=rhpam&downloadType=distributions
Installation instructions are well documented in Red Hat's documentation
https://access.redhat.com/documentation/en-us/red_hat_process_automation_manager/7.3/html/installing_and_configuring_red_hat_process_automation_manager_on_red_hat_jboss_eap_7.2/index

You will also require the following software
- JDK 8
- A recent copy of Maven, it has been tried with Apache Maven 3.5.3
 

# 3. Instructions
## 3.1. Setup Users
The rhpam7-install-demo sets up a user erics.

At least 2 further user "salesman" by default will be required to setup as well as a group called "sales". 
The username can be different providing this is updated in the UI when you run the process.

Under jboss-eap-7.2/bin, run the ./add-user.sh (or .bat for windows) script

```
/bin/add-user.sh -u salesman -p salesman1! -g sales 
```

```
/bin/add-user.sh -u executive -p executive1! -g sales 
```

```
bfarr-osx:bin bfarr$ ./add-user.sh 

What type of user do you wish to add? 
 a) Management User (mgmt-users.properties) 
 b) Application User (application-users.properties)
(a): b

Enter the details of the new user to add.
Using realm 'ApplicationRealm' as discovered from the existing property files.
Username : salesman
....
What groups do you want this user to belong to? (Please enter a comma separated list, or leave blank for none)[  ]: sales
.....
Is this new user going to be used for one AS process to connect to another AS process? 
e.g. for a slave host controller connecting to the master or for a Remoting connection for server to server EJB calls.
yes/no? no
```


To check ensure you have a role of salesman you can view user details either in the PAM console or through these files
jboss-eap-7.2/standalone/configuration/application-roles.properties
jboss-eap-7.2/standalone/configuration/application-users.properties


## 3.2. Maven repository to your local environment.

Within your maven settings.xml you may require to setup access to redhat repositories or alternatively download the maven repository for PAM 7.3
https://access.redhat.com/jbossnetwork/restricted/listSoftware.html?product=rhpam&downloadType=distributions

You may also require to setup the Red Hat repos setup in your maven settings.xml for building if not already there.
http://maven.repository.redhat.com/techpreview/all/
http://maven.repository.redhat.com/earlyaccess/all/

Refer to this guide for adding settings - https://maven.apache.org/settings.html

## 3.3. Launch EAP

Launch EAP/PAM locally by running /bin/standaline.sh

Ensure you can login into business central

## 3.4. Building the DataModel Mock Services and UI.

For the POC and mock services and UI have been placed in a single war file for simplicity.

The UI is based on HTML and JavaScript and in theory can be run without a server however will require that Cross Origin References CORS is enabled in the kie server in order to invoke the REST API from outside the domain.

1. Create a folder for the git repository
  ```
  $ mkdir ~/svpoc
  $ cd ~/svpoc
  ```
2. Execute the git clone command:  

  ```
  $ git clone https://github.com/bfarr-rh/pamcoursework.git
  ```
3. For convenience the war file has already been built and checked in
https://github.com/bfarr-rh/pamcoursework/tree/master/jaxws-pojo/service/target

Alternatively build the jaxws-pojo service by running 
  ```
  $ cd ~/jaxws-pojo
  $ mvn clean install
  ```

4. Build the datamodel and install in local maven repo

  ```
  $ cd ~/solarvillage-domain
  $ mvn clean install
  ```
5. Copy the WAR file the to deployment directory of JBOSS EAP where PAM is running

jaxws-pojo/service/target/jaxws-pojo-service.war
  

## 3.5. Test the Deployed Service 
1. Once deployed check the following URLS 

The UI requires JQuery which will be pulled from code.jquery.com

UI - http://localhost:8080/jaxws-pojo-endpoint/index.html
Update return status from Govt Services - http://localhost:8080/jaxws-pojo-endpoint/status.jsp
Mock Electric Permit Government services WSDL - http://localhost:8080/jaxws-pojo-endpoint/ElectricBusinessService?wsdl
Mock Structural Permit Government services WSDL - http://localhost:8080/jaxws-pojo-endpoint/StructuralBusinessService?wsdl

2. Test the _Kie Server_ availabillity by curl with usernames and password as has been setup:

Example request below.
  ```
  $ curl -u 'salesman:salesman1!' http://localhost:8080/kie-server/services/rest/server
  $ curl -u 'erics:password' http://localhost:8080/kie-server/services/rest/server
  ```
  Should return the main information about the _Kie Server_ installation:

  ```
 <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 <response type="SUCCESS" msg="Kie Server info">
     <kie-server-info>
         <capabilities>KieServer</capabilities>
         <capabilities>BRM</capabilities>
         <capabilities>BPM</capabilities>
         <capabilities>CaseMgmt</capabilities>
         <capabilities>BPM-UI</capabilities>
         <capabilities>BRP</capabilities>
         <capabilities>DMN</capabilities>
         <capabilities>Swagger</capabilities>
         <location>http://localhost:8080/kie-server/services/rest/server</location>
         <messages>
             <content>Server KieServerInfo{serverId='default-kieserver', version='7.18.0.Final-redhat-00002', name='default-kieserver', location='http://localhost:8080/kie-server/services/rest/server', capabilities=[KieServer, BRM, BPM, CaseMgmt, BPM-UI, BRP, DMN, Swagger]', messages=null', mode=DEVELOPMENT}started successfully at Sun May 05 22:31:59 AEST 2019</content>
             <severity>INFO</severity>
             <timestamp>2019-05-05T22:31:59.428+10:00</timestamp>
         </messages>
         <mode>DEVELOPMENT</mode>
         <name>default-kieserver</name>
         <id>default-kieserver</id>
         <version>7.18.0.Final-redhat-00002</version>
     </kie-server-info>
 </response>
  ```
  

## 3.6. Import project into PAM, build and deploy

Import the sv2 project into PAM and deploy it.

Use the following URL and select sv2
https://github.com/bfarr-rh/pamcoursework


## 3.7. Run the UI.

The UI has been developed to create all the neccessary requests to the server.

An inter video of the UI is located here to help guide you through how to drive the process.
 https://drive.google.com/open?id=19Nz4WLV3Lv-KGfqTVdmOCseSNJFlci7p
 

# 4. Conclusion
  Process Automation Manager provides a structured way to achieve the outcome of automating SolarVillage New Order request. 
  The POC would further be developed to look at exception and edge cases.
.