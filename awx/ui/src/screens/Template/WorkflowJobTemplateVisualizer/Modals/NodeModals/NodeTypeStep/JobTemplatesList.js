import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { t } from '@lingui/macro';
import { func, shape } from 'prop-types';
import { SystemJobTemplatesAPI } from 'api';
import { getQSConfig, parseQueryString } from 'util/qs';
import useRequest from 'hooks/useRequest';
import DataListToolbar from 'components/DataListToolbar';
import CheckboxListItem from 'components/CheckboxListItem';
import PaginatedTable, {
=======

import { t } from '@lingui/macro';
import { Popover } from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';
import { func, shape } from 'prop-types';
import { JobTemplatesAPI } from 'api';
import { getQSConfig, parseQueryString } from 'util/qs';
import useRequest from 'hooks/useRequest';
import CheckboxListItem from 'components/CheckboxListItem';
import ChipGroup from 'components/ChipGroup';
import CredentialChip from 'components/CredentialChip';
import DataListToolbar from 'components/DataListToolbar';
import { Detail, DetailList } from 'components/DetailList';
import PaginatedTable, {
  ActionItem,
>>>>>>> upstream/devel
  HeaderCell,
  HeaderRow,
  getSearchableKeys,
} from 'components/PaginatedTable';

<<<<<<< HEAD
const QS_CONFIG = getQSConfig('system-job-templates', {
=======
const QS_CONFIG = getQSConfig('job-templates', {
>>>>>>> upstream/devel
  page: 1,
  page_size: 5,
  order_by: 'name',
});

<<<<<<< HEAD
function SystemJobTemplatesList({ nodeResource, onUpdateNodeResource }) {
  const location = useLocation();

  const {
    result: {
      systemJobTemplates,
      count,
      relatedSearchableKeys,
      searchableKeys,
    },
    error,
    isLoading,
    request: fetchWorkflowJobTemplates,
=======
function TemplatePopoverContent({ template }) {
  return (
    <DetailList compact stacked>
      <Detail
        label={t`Inventory`}
        value={template.summary_fields?.inventory?.name}
        dataCy={`template-${template.id}-inventory`}
      />
      <Detail
        label={t`Project`}
        value={template.summary_fields?.project?.name}
        dataCy={`template-${template.id}-project`}
      />
      <Detail
        label={t`Playbook`}
        value={template?.playbook}
        dataCy={`template-${template.id}-playbook`}
      />
      {template.summary_fields?.credentials &&
      template.summary_fields.credentials.length ? (
        <Detail
          fullWidth
          label={t`Credentials`}
          dataCy={`template-${template.id}-credentials`}
          value={
            <ChipGroup
              numChips={5}
              totalChips={template.summary_fields.credentials.length}
              ouiaId={`template-${template.id}-credential-chips`}
            >
              {template.summary_fields.credentials.map((c) => (
                <CredentialChip
                  key={c.id}
                  credential={c}
                  isReadOnly
                  ouiaId={`credential-${c.id}-chip`}
                />
              ))}
            </ChipGroup>
          }
        />
      ) : null}
    </DetailList>
  );
}

function JobTemplatesList({ nodeResource, onUpdateNodeResource }) {
  const location = useLocation();

  const {
    result: { jobTemplates, count, relatedSearchableKeys, searchableKeys },
    error,
    isLoading,
    request: fetchJobTemplates,
>>>>>>> upstream/devel
  } = useRequest(
    useCallback(async () => {
      const params = parseQueryString(QS_CONFIG, location.search);
      const [response, actionsResponse] = await Promise.all([
<<<<<<< HEAD
        SystemJobTemplatesAPI.read(params, {
          role_level: 'execute_role',
        }),
        SystemJobTemplatesAPI.readOptions(),
      ]);
      return {
        systemJobTemplates: response.data.results,
=======
        JobTemplatesAPI.read(params, {
          role_level: 'execute_role',
        }),
        JobTemplatesAPI.readOptions(),
      ]);
      return {
        jobTemplates: response.data.results,
>>>>>>> upstream/devel
        count: response.data.count,
        relatedSearchableKeys: (
          actionsResponse?.data?.related_search_fields || []
        ).map((val) => val.slice(0, -8)),
        searchableKeys: getSearchableKeys(actionsResponse.data.actions?.GET),
      };
    }, [location]),
    {
<<<<<<< HEAD
      systemJobTemplates: [],
=======
      jobTemplates: [],
>>>>>>> upstream/devel
      count: 0,
      relatedSearchableKeys: [],
      searchableKeys: [],
    }
  );

  useEffect(() => {
<<<<<<< HEAD
    fetchWorkflowJobTemplates();
  }, [fetchWorkflowJobTemplates]);
=======
    fetchJobTemplates();
  }, [fetchJobTemplates]);
>>>>>>> upstream/devel

  return (
    <PaginatedTable
      contentError={error}
      hasContentLoading={isLoading}
      itemCount={count}
<<<<<<< HEAD
      items={systemJobTemplates}
=======
      items={jobTemplates}
>>>>>>> upstream/devel
      qsConfig={QS_CONFIG}
      headerRow={
        <HeaderRow isExpandable={false} qsConfig={QS_CONFIG}>
          <HeaderCell sortKey="name">{t`Name`}</HeaderCell>
        </HeaderRow>
      }
      renderRow={(item, index) => (
        <CheckboxListItem
          rowIndex={index}
          isSelected={!!(nodeResource && nodeResource.id === item.id)}
          itemId={item.id}
<<<<<<< HEAD
          key={item.id}
=======
          key={`${item.id}-listItem`}
>>>>>>> upstream/devel
          name={item.name}
          label={item.name}
          onSelect={() => onUpdateNodeResource(item)}
          onDeselect={() => onUpdateNodeResource(null)}
          isRadio
<<<<<<< HEAD
=======
          rowActions={[
            <ActionItem id={item.id} visible>
              <Popover
                bodyContent={<TemplatePopoverContent template={item} />}
                headerContent={<div>{t`Details`}</div>}
                id={`item-${item.id}-info-popover`}
                position="right"
              >
                <OutlinedQuestionCircleIcon />
              </Popover>
            </ActionItem>,
          ]}
>>>>>>> upstream/devel
        />
      )}
      renderToolbar={(props) => <DataListToolbar {...props} fillWidth />}
      showPageSizeOptions={false}
      toolbarSearchColumns={[
        {
          name: t`Name`,
          key: 'name__icontains',
          isDefault: true,
        },
<<<<<<< HEAD
=======
        {
          name: t`Playbook name`,
          key: 'playbook__icontains',
        },
        {
          name: t`Created By (Username)`,
          key: 'created_by__username__icontains',
        },
        {
          name: t`Modified By (Username)`,
          key: 'modified_by__username__icontains',
        },
>>>>>>> upstream/devel
      ]}
      toolbarSearchableKeys={searchableKeys}
      toolbarRelatedSearchableKeys={relatedSearchableKeys}
    />
  );
}

<<<<<<< HEAD
SystemJobTemplatesList.propTypes = {
=======
JobTemplatesList.propTypes = {
>>>>>>> upstream/devel
  nodeResource: shape(),
  onUpdateNodeResource: func.isRequired,
};

<<<<<<< HEAD
SystemJobTemplatesList.defaultProps = {
  nodeResource: null,
};

export default SystemJobTemplatesList;
=======
JobTemplatesList.defaultProps = {
  nodeResource: null,
};

export default JobTemplatesList;
>>>>>>> upstream/devel
