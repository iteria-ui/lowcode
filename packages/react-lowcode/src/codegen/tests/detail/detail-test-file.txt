import { useIntl } from 'react-intl';
import * as React from 'react';
import {
  TextField,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Grid
} from '@material-ui/core';
import { useFormik } from 'formik';
import { Customer } from './Customer';
export var FormikComponent: React.FC<Customer> = customer => {
  const intl = useIntl();
  const formik = useFormik({
    initialValues: {
      avatarUrl: customer.avatarUrl,
      createdAt: customer.createdAt,
      email: customer.email,
      name: customer.name,
      phone: customer.phone,
      updatedAt: customer.updatedAt,
      test2: customer.test2
    },
    onSubmit: values => {}
  });
  {
    const intl = useIntl();
    return (
      <div style={{ marginLeft: 25, marginRight: 25 }}>
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Avatar id="avatarUrl" src={formik.values.avatarUrl} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    id="createdAt"
                    type="date"
                    label="createdAt"
                    InputLabelProps={{ shrink: true }}
                    value={intl.formatDate(formik.values.createdAt)}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    type="input"
                    label="email"
                    value={intl.formatMessage({ id: formik.values.email })}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    id="name"
                    type="input"
                    label="name"
                    value={intl.formatMessage({ id: formik.values.name })}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    id="phone"
                    type="input"
                    label="phone"
                    value={intl.formatMessage({ id: formik.values.phone })}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    id="updatedAt"
                    type="date"
                    label="updatedAt"
                    InputLabelProps={{ shrink: true }}
                    value={intl.formatDate(formik.values.updatedAt)}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </div>
    );
  }
};
