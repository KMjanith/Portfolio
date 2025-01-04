import React from "react";
import { motion } from "framer-motion";

export default function MonoVSMicro() {
  return (
    <div className="md:mt-5 my-3 md:max-w-3xl md:ml-6">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-lg text-neutral-400"
      >
        In software architecture, choosing between monolithic and microservices
        architectures significantly impacts development, deployment, and
        maintenance. Each approach has unique strengths and weaknesses,
        depending on the project's size and complexity. This blog compares these
        architectures from an engineering perspective, focusing on{" "}
        <strong className="text-neutral-300">
          scalability, flexibility, and maintenance.
        </strong>
      </motion.p>
      <Topic content="Monolithic Architecture" />
      <div className="flex justify-center items-center">
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          src="https://dz2cdn1.dzone.com/storage/temp/17886806-66abf02b91f190a298ac47f6-66996d3c0a17602d56d4d809.png"
          className=" rounded-lg mb-5 md:w-4/5 md:h-4/5 "
        />
      </div>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-lg text-neutral-400"
      >
        Monolithic architecture refers to a traditional approach where all
        components of an application are integrated into a single codebase. This
        model has been widely used for many years and is often seen in smaller
        applications or projects with simpler requirements.
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <SubTopic content="Advantages of Monolithic Architecture" />
        <ol className="list-decimal">
          <li>
            <SubSubTopic content="Simplicity" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  Monolithic applications are easier to build initially because
                  <strong className="text-neutral-300">
                    they don't require handling complex inter-service
                    communication, which is common in microservices.
                  </strong>
                  Developers can focus on one unified codebase, reducing the
                  need for distributed systems management.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Performance" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  As everything is part of the same application, communication
                  between components happens within the same memory space. This
                  leads to better performance when compared to the overhead of
                  network communication required by microservices.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Simplified Testing" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  With monolithic systems, testing is straightforward because
                  there is only one application to test, and all components are
                  tightly integrated. This makes unit testing and integration
                  testing easier.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Faster Development for Small Teams:" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  Small teams or organizations can find monolithic architecture
                  more efficient since there’s no need to manage multiple
                  services and deployments. The project can be built, deployed,
                  and scaled as one unit.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </motion.div>

      <div className="bg-neutral-700 flex w-full h-0.5 my-5 rounded-2xl"></div>
      <Topic content="Microservices Architecture" />
      <div className="flex justify-center items-center">
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          src="https://www.netsolutions.com/wp-content/uploads/2024/09/title-microservices.webp"
          className=" rounded-lg mb-5 md:w-4/5 md:h-4/5 "
        />
      </div>
      <motion.p
        whileInView={{ opasity: 1, y: 0 }}
        initial={{ opasity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-lg text-neutral-400"
      >
        Microservices architecture breaks down applications into smaller,
        independent services that communicate with each other over a network.
        Each service is a self-contained unit that is developed, deployed, and
        scaled independently. This approach has gained popularity in recent
        years, especially for large, complex systems.
      </motion.p>

      <motion.div
        whileInView={{ opasity: 1, y: 0 }}
        initial={{ opasity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SubTopic content="Advantages of Microservices Architecture" />
        <ol className="list-decimal">
          <li>
            <SubSubTopic content="Scalability" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  Microservices offer a significant advantage when it comes to
                  scaling. Each service can be scaled independently based on
                  demand, reducing resource waste and improving performance in
                  high-traffic areas.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Flexibility and Agility" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  With microservices, teams{" "}
                  <strong className="text-neutral-300">
                    can develop and deploy individual services using the best
                    technologies suited for that service.
                  </strong>
                  This allows greater flexibility in choosing tech stacks and
                  makes it easier to adopt new technologies as needed.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Resilience" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  Since each service is independent, if one service fails, the
                  others continue to operate normally,{" "}
                  <strong className="text-neutral-300">
                    ensuring high availability and fault tolerance in the
                    system.
                  </strong>
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Faster Development" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  Microservices enable continuous integration and continuous
                  deployment (CI/CD), making it easier to deploy smaller changes
                  more frequently without affecting the entire system. This
                  accelerates development cycles.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <SubSubTopic content="Easier Maintenance" />
            <ol className="list-disc ml-5">
              <li>
                <p className="lg:text-lg text-neutral-400">
                  Smaller codebases for individual services make it easier to
                  maintain and debug. Updates to a single service don’t require
                  redeployment of the entire application.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </motion.div>

      <motion.div
        whileInView={{ opasity: 1, y: 0 }}
        initial={{ opasity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SubTopic content="Disadvantages of Microservices Architecture" />
        <ol className="list-disc">
          <li>
            <SubSubTopic content="Complexity" />
            Managing multiple services, databases, and networks in microservices
            demands expertise and robust tools like Kubernetes.
          </li>
          <li>
            <SubSubTopic content="Overhead" /> Inter-service communication adds
            network overhead and complicates data consistency.
          </li>
          <li>
            <SubSubTopic content="Increased Latency" />
            Microservices can introduce latency due to network-based service
            communication.
          </li>
          <li>
            <SubSubTopic content="Higher Resource Consumption" />
            Each service's independent runtime increases resource usage and
            costs.
          </li>
        </ol>
      </motion.div>
    </div>
  );
}

function Topic({ content }) {
  return (
    <p className="text-2xl md:text-3xl text-bold mt-4 lg:mt-6 font-bold mb-2">
      {content}:{" "}
    </p>
  );
}

function SubTopic({ content }) {
  return (
    <p className="text-xl md:text-2xl text-bold mt-4 font-bold text-neutral-200">
      {content}:{" "}
    </p>
  );
}

function SubSubTopic({ content }) {
  return (
    <p className="text-lg md:text-xl text-bold mt-4 font-bold text-neutral-200">
      {content}:{" "}
    </p>
  );
}
