# Add Tag Command

> The following document applies to the command-line usage of `add-hcl-tag`.  For usage directly in a Node application, please see the [alternate README located here](README-ALT.md).

## Purpose  

Locate objects within an HCL file and a tag to it.

## Installation

```bash
npm i @hclutils/add-hcl-tag
```

## Usage

If you've installed the utilities:

```bash  
add-hcl-tag \
  --file "/MyIaC/terraform.tf" \
  --node "resource.aws_vpc.*" \
  --name "Project" \
  --value "Hackathon 2024"
```

... or ...

```bash  
npx add-hcl-tag \
  --file "/MyIaC/terraform.tf" \
  --node "resource.aws_vpc.*" \
  --name "Project" \
  --value "Hackathon 2024"
```

... produces this:

```bash
Updates: 3
- resources.aws_vpc.vpc1
- resources.aws_vpc.vpc2
- resources.aws_vpc.vpc3
```

### Parameters  

| Name        | Description                                | Type            | Default |
|-------------|--------------------------------------------|-----------------|---------|
| `file`      | Target HCL file to modify                  | `string (path)` |         |
| `path`      | Folder containing HCL files to modify      | `string (path)` |         |
| `recursive` | Should the path be recursed?               | `boolean`       | `false` |
| `node`      | Fully-qualified name of the node(s) to tag |                 |         |
| `name`      | Name of the tag to add                     |                 |         |
| `value`     | String to add as the value                 |                 |         |
| `backup`    | Create a backup file of the original?      | `boolean`       | `true`  |
| `console`   | Should status be sent to the console?      | `boolean`       | `true`  |

### Contact  

Please feel free to contact me directly with any questions, comments, or enhancement requests:

**Fred Lackey**  
**[fred.lackey@gmail.com](mailto://fred.lackey@gmail.com)**  
**[http://fredlackey.com](http://www.fredlackey.com)**  
