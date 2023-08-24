**Some common steps in a CI setup include *linting*, *testing*, and *building*. What are the specific tools for taking care of these steps in the ecosystem of the language you picked?**

1. linting: eslint
2. testing: jest
3. building: webpack

**What alternatives are there to set up the CI besides Jenkins and GitHub Actions?**

1. GitLab CI/CD

**Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?**

1. If the size of project is small, we use cloud-based becuase we need less initial setup, otherwise, we use self-hosted becuase we have more control and less cost

2. if we do not have enough resource, we should use cloud-based, otherwise, we can try set up self-hosted server by ourselves.

