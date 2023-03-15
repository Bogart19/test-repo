---
testspace:
title: OS Systems
matrix: # test different OS systems
  - name: Windows
    timeout: 27 seconds
    reqs: "[Windows details](https://staging7.newco.com/windows)"
  - name: Linux
    timeout: 14 seconds
    reqs: "[Linux details](https://staging7.newco.com/linus)"
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}

Matrix being tested.

| Name | Timeout | Info |
| ---- | ------- | ---- |

{%- for os in spec.matrix %}
{{ os.name }} | {{ os.timeout}} | {{os.reqs -}}
{% endfor %}

{% for os in spec.matrix %}

## Test {{ os.name }}

- check for correct timeout: {{ os.timeout}}
- check on requirements: {{ os.reqs }}
  {% endfor %}
