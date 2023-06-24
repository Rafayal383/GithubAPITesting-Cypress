describe('create repo ,get repo ,list repo  ,list public repo , get all repo topics and replace all repo topics', () => {
    const baseurl="https://api.github.com";
    const token = "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";
    let repoName;
    let ownerName;

    it('CREATE A REPOSITORY FOR A AUTHENTICATED USER', () => {
        cy.request({
            method: "POST",
            url: `${baseurl}/user/repos`,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`
            },
            body: {
               name :"gitAPIproject-tetsing-repo11"
            },
          }).then((res) => {
            expect(res.status).to.eq(201);
            // console.log(res);
            repoName = res.body.name;
            ownerName = res.body.owner.login;
            cy.log(repoName)
            console.log(res)
            cy.log(ownerName)
          });
    });

    it('GET A REPOSITORY', () => {
        cy.request({
            method: "GET",
            url: `${baseurl}/repos/${ownerName}/${repoName}`,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`
            }
          }).then((res) => {
            expect(res.status).to.eq(200);
            console.log(res)
          });
    });

    it('LIST PUBLIC REPOSITORIES', () => {
        cy.request({
            method: "GET",
            url: `${baseurl}/repositories`,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`
            }
          }).then((res) => {
            expect(res.status).to.eq(200);
            console.log(res)
          });
    });


    it('LIST REPOSITORY TAGS', () => {
        cy.request({
            method: "GET",
            url: `${baseurl}/repos/${ownerName}/${repoName}/tags`,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`
            }
          }).then((res) => {
            expect(res.status).to.eq(200);
            console.log(res)
          });
    });

    it('GET ALL REPOSITORY TOPICS', () => {
      cy.request({
            method: "GET",
            url: `${baseurl}/repos/${ownerName}/${repoName}/topics`,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`
            }
          }).then((res) => {
            expect(res.status).to.eq(200);
            console.log(res)
          });
    });

    it('REPLACE ALL REPOSITORY TOPICS', () => {
      cy.request({
            method: "PUT",
            url: `${baseurl}/repos/${ownerName}/${repoName}/topics`,
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`
            },
            body: {
               names: ["topic1","topic2","topic3"]
            },
          }).then((res) => {
            expect(res.status).to.eq(200);
            console.log(res);
          });
    });

});