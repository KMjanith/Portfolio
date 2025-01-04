import React from "react";
import { motion } from "framer-motion";

export default function TypesProgLang() {
  return (
    <div className="md:mt-5 my-3 md:max-w-3xl md:ml-6">
      <motion.p
        whileInView={{ opasity: 1, y: 0 }}
        initial={{ opasity: 1, y: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:text-lg text-neutral-400"
      >
        Programming languages can be categorized based on their paradigms and
        use cases. Here’s a brief overview of the core types and when they are
        most suitable
      </motion.p>

      <motion.div
        whileInView={{ opasity: 1, y: 0 }}
        initial={{ opasity: 1, y: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Topic content="1. Scripting Languages" />
        <p className="lg:text-lg text-neutral-400">
          High-level, interpreted languages designed to{" "}
          <strong className="text-neutral-300">
            automate tasks, control software, or enhance web applications.
          </strong>
        </p>
        <motion.div
          whileInView={{ opasit: 1, x: 0 }}
          initial={{ opasity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 my-6 lg:my-10 border lg:py-6 py-2 border-neutral-800 rounded-3xl"
        >
          <Images
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThi4kwjvEuQcJaOZ7-Su8zR29CjXXdTFt2ag&s"
            alt="python"
          />
          <Images
            link="data:image/png;base64,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"
            alt="javascript"
          />
          <Images
            link="https://static-00.iconduck.com/assets.00/ruby-icon-1024x1024-u3yoql71.png"
            alt="ruby"
          />

          <Images
            alt="Bash"
            link="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5hhrcbgvutmdmducqkek.png"
          />
        </motion.div>

        <motion.div
          whileInView={{ opasity: 1, y: 0 }}
          initial={{ opasity: 1, y: -100 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SubTopic content="Use Cases" />
          <ol className="list-disc ml-5">
            <li>Automating repetitive tasks</li>
            <li>Web development</li>
            <li>Quick prototyping and data analysis</li>
          </ol>
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Topic content="2. Object-Oriented Programming (OOP) Languages" />
        <p className="lg:text-lg text-neutral-400">
          Languages that use objects and classes to{" "}
          <strong className="text-neutral-300">
            model real-world entities, promoting reusability and modularity.
          </strong>
        </p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 my-6 lg:my-10 border lg:py-6 py-2 border-neutral-800 rounded-3xl"
        >
          <Images
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThi4kwjvEuQcJaOZ7-Su8zR29CjXXdTFt2ag&s"
            alt="python"
          />
          <Images
            link="https://external-preview.redd.it/the-destination-for-java-developers-v0-VKfyXB99AEiHiPvIbK-vLRHcejGsT7-_XARIBlJwh38.jpg?auto=webp&s=cd2a183a7b3267e21aeb99608b9a2c4c3f267bc7"
            alt="java"
          />
          <Images
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAIPlPCT2-PdrSUXQs0zdrYSezfLFbntaNg&s"
            alt="C++"
          />
          <Images
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShf0LHTk9yRL3wPoqXENgl8Kcmci37yoSSYw&s"
            alt="C#"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SubTopic content="Use Cases" />
          <ol className="list-disc ml-5">
            <li>Building large-scale, maintainable software.</li>
            <li>
              Applications requiring modularity, such as games or enterprise
              software.
            </li>
            <li>
              Ideal for complex systems that need structured code and
              scalability.
            </li>
          </ol>
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Topic content="3. Procedural Languages" />
        <p className="lg:text-lg text-neutral-400">
          <strong className="text-neutral-300">
            Follow a step-by-step execution flow,
          </strong>{" "}
          emphasizing functions and procedures.
        </p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 my-6 lg:my-10 border lg:py-6 py-2 border-neutral-800 rounded-3xl"
        >
          <Images
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png"
            alt="C"
          />
          <Images
            alt="Fortran"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwpHAxCKTLIRKksSgiryVwyotXRQtKmX2EQ&s"
          />
          <Images
            alt="Pascal"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3rYkACYjTwt8QjiIi2eyKR7TkpaktID_m33I-14gatUq0-1FJOTh4r2cWx2zZoW7GhY&usqp=CAU"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SubTopic content="Use Cases" />
          <ol className="list-disc ml-5">
            <li>System programming</li>
            <li>Applications with clear and sequential logic</li>
            <li>
              Suitable for performance-critical tasks and hardware-level
              programming.
            </li>
          </ol>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Topic content="4. Functional Languages" />
        <p className="lg:text-lg text-neutral-400">
          Focus on immutability and{" "}
          <strong className="text-neutral-300">
            functions as first-class citizens, avoiding state changes.
          </strong>
        </p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 my-6 lg:my-10 border lg:py-6 py-2 border-neutral-800 rounded-3xl"
        >
          <div className="flex items-center flex-col font-afaced gap-2">
            <Images
              link="https://cdn-icons-png.flaticon.com/512/5968/5968259.png"
              alt="Haskel"
            />
            Haskell
          </div>

          <div className="flex items-center flex-col font-afaced gap-2">
            <Images
              alt="Lisp"
              link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ6P4SCNtZ4nMdngFl9ihtGLu92-UEJlYUg&s"
            />
            Lisp
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SubTopic content="Use Cases" />
          <ol className="list-disc ml-5">
            <li>Mathematical computations.</li>
            <li>Scalable and fault-tolerant systems.</li>
            <li>
              Ideal for applications requiring high reliability, like financial
              systems.
            </li>
          </ol>
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Topic content="5. Markup and Domain-Specific Languages (DSLs)" />
        <p className="lg:text-lg text-neutral-400">
          Specialized languages for specific domains, often used for structuring
          data or content.
        </p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 my-6 lg:my-10 border lg:py-6 py-2 border-neutral-800 rounded-3xl"
        >
          <div className="flex items-center flex-col font-afaced gap-2">
            <Images
              link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxsGLCD6okZKXFby6InQWCK_PK2lL-tt6jg&s"
              alt="Html"
            />
            HTML
          </div>

          <div className="flex items-center flex-col font-afaced gap-2">
            <Images
              alt="SQL"
              link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGcnD9w4iAUeuaR7Gt-0XDyWK7PwuRrbWWQ&s"
            />
            SQL
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SubTopic content="Use Cases" />
          <ol className="list-disc ml-5">
            <li>Web design (HTML/CSS).</li>
            <li>Data manipulation and querying (SQL).</li>
            <li>
              Choose these for tasks tightly bound to their domain, like web or
              database work.
            </li>
          </ol>
        </motion.div>
      </motion.div>

      <Topic content="Conclusion" />
      <motion.p
        whileInView={{ opasity: 1, y: 0 }}
        initial={{ pasity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-lg text-neutral-400"
      >
        Choosing the right type of programming language depends on your
        project’s needs. it depends{" "}
        <strong className="text-neutral-300">
          whether it’s automation, system-level programming, or complex, modular
          applications.
        </strong>{" "}
        Understanding these categories ensures you select the most efficient
        tool for the job.
      </motion.p>
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

function Images({ link, alt }) {
  return <img src={link} alt={alt} className="max-w-32 max-h-32 rounded-xl" />;
}
