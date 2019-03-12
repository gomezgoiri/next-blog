import React from 'react'
import PropTypes from 'prop-types'
import CollapsiblePanel from '../../../src/components/CollapsiblePanel'
import { makeUrl } from '../../../src/utils/content'

const CollapsibleProject = ({
  title,
  website,
  preview,
  expanded = false,
  onCollapse,
  ...other
}) => (
  <CollapsiblePanel expanded={expanded} title={title} onCollapse={onCollapse}>
    <div dangerouslySetInnerHTML={{ __html: preview }} />
    <div className="text-right">
      <a role="button" className="btn btn-default" href={website}>

        Go to website
      </a>

      <a role="button" className="btn btn-info" href={makeUrl(other)}>

        Read more
      </a>
    </div>
  </CollapsiblePanel>
)

CollapsibleProject.propTypes = {
  title: PropTypes.string,
  website: PropTypes.string,
  preview: PropTypes.string,
  expanded: PropTypes.bool,
  bodyHtml: PropTypes.element,
  short: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  onCollapse: PropTypes.func.isRequired
}

export default CollapsibleProject
